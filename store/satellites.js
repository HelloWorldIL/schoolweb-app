import { db } from '~/services/firebaseinit'
const satellites = db.collection('satellites')

export const state = () => ({
  satellites: []
})

export const getters = {
  getSatellites(state) {
    return state.satellites
  }
}

export const mutations = {
  addSatellite(state, sat) {
    state.satellites.push(sat)
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
    if (state.satellites[0] != null) {
      return Promise.resolve()
    }
    satellites.onSnapshot(snapshot => {
      snapshot.docChanges().forEach(satDoc => {
        if (satDoc.type === 'removed') {
          commit('removeSatellite', satDoc.doc.id)
        } else if (satDoc.type === 'added') {
          const sat = {
            id: satDoc.doc.id,
            name: satDoc.doc.get('name'),
            imageUrl: satDoc.doc.get('imageUrl')
          }
          commit('addSatellite', sat)
        } else {
          const sat = {
            id: satDoc.doc.id,
            name: satDoc.doc.get('name'),
            imageUrl: satDoc.doc.get('imageUrl')
          }
          commit('editSat', sat)
        }
      })
    })
    return Promise.resolve(state.satellites)
  },
  addSatellite({ commit }, satellite) {
    return satellites.doc(satellite.id).set({
      name: satellite.name
    })
  },
  deleteSatellite({ commit }, id) {
    return satellites.doc(id).delete()
  }
}
