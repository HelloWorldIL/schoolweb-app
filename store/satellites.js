import { db, storage } from '~/services/firebaseinit'
const satellites = db().collection('satellites')

export const state = () => ({
  satellites: []
})

export const getters = {
  getSatellites(state) {
    return state.satellites
  },
  getSatellite: state => id => {
    const index = state.satellites.findIndex(element => {
      if (element.id === id) {
        return element
      }
    })
    if (index === -1) {
      return null
    }
    return state.satellites[index]
  }
}

export const mutations = {
  addSatellite(state, sat) {
    const index = state.satellites.findIndex(element => {
      if (element.id === sat.id) {
        return element
      }
    })
    if (index === -1) {
      state.satellites.push(sat)
    }
  },
  editSat(state, sat) {
    const index = state.satellites.findIndex(element => {
      if (element.id === sat.id) {
        return element
      }
    })
    state.satellites.splice(index, 1, sat)
  },
  removeSatellite(state, id) {
    const index = state.satellites.findIndex(element => {
      if (element.id === id) {
        return element
      }
    })
    state.satellites.splice(index, 1)
  }
}

export const actions = {
  loadSatellites({ commit, state, dispatch }) {
    return new Promise(function(resolve, reject) {
      if (state.satellites.length > 0) {
        resolve(state.satellites)
      } else {
        satellites.get().then(snapshot => {
          snapshot.forEach(satDoc => {
            const sat = {
              id: satDoc.id,
              name: satDoc.get('name'),
              imageName: satDoc.get('imageName'),
              imageUrl: satDoc.get('imageUrl')
            }
            commit('addSatellite', sat)
          })
          resolve(state.satellites)
        })
      }
      dispatch('registerSatelliteListener')
    })
  },
  registerSatelliteListener({ commit, state }) {
    satellites.onSnapshot(snapshot => {
      snapshot.docChanges().forEach(satDoc => {
        if (satDoc.type === 'removed') {
          commit('removeSatellite', satDoc.doc.id)
        } else if (satDoc.type === 'added') {
          const sat = {
            id: satDoc.doc.id,
            name: satDoc.doc.get('name'),
            imageName: satDoc.doc.get('imageName'),
            imageUrl: satDoc.doc.get('imageUrl')
          }
          commit('addSatellite', sat)
        } else {
          const sat = {
            id: satDoc.doc.id,
            name: satDoc.doc.get('name'),
            imageName: satDoc.doc.get('imageName'),
            imageUrl: satDoc.doc.get('imageUrl')
          }
          commit('editSat', sat)
        }
      })
    })
  },
  addSatellite({ commit, dispatch }, satellite) {
    const filename = satellite.image.name
    const ext = filename.slice(filename.lastIndexOf('.'))
    return new Promise(function(resolve, reject) {
      storage()
        .ref(`satellites/${satellite.id}${ext}`)
        .put(satellite.image)
        .then(() => {
          storage()
            .ref(`satellites/${satellite.id}${ext}`)
            .getDownloadURL()
            .then(imageUrl => {
              satellites.doc(satellite.id).set({
                name: satellite.name,
                imageName: `${satellite.id}${ext}`,
                imageUrl: `${imageUrl}`
              })
              resolve()
            })
        })
    })
  },
  deleteSatellite({ commit, getters }, id) {
    const filename = getters.getSatellite(id).imageName
    storage()
      .ref(`satellites/${filename}`)
      .delete()
    return satellites.doc(id).delete()
  },
  getImageUrl({ commit, getters }, id) {
    const filename = getters.getSatellite(id).imageName
    return storage()
      .ref(`satellites/${filename}`)
      .getDownloadURL()
  }
}
