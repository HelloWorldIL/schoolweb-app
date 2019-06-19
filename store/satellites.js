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
  loadSatellites({ commit, state }) {
    return new Promise(function(resolve, reject) {
      satellites.onSnapshot(snapshot => {
        snapshot.docChanges().forEach(satDoc => {
          if (satDoc.type === 'removed') {
            // eslint-disable-next-line no-console
            console.log(satDoc.doc.id)
            commit('removeSatellite', satDoc.doc.id)
          } else if (satDoc.type === 'added') {
            commit('addSatellite', satDoc.doc.data())
          } else {
            commit('editSat', satDoc.doc.data())
          }
        })
        resolve()
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
                id: satellite.id,
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
