import { createSlice } from '@reduxjs/toolkit'

const defaultState = {
  wayData: [],
  wayArrows: [],
  wayStatuses: {}
}
/*
{
    direction: 'right',
    coords: [
      {x: 0, y: 100},
      {x: 100, y: 100},
      {x: 100, y: 200},
      {x: 300, y: 200},
      {x: 300, y: 300},
      {x: 200, y: 300},
      {x: 200, y: 220},
    ]
  }
*/

export const waySlice = createSlice({
  name: 'way',
  initialState: defaultState,
  reducers: {
    setWay: (state, data) => {
      state.wayData = data.payload
    },
    setWayArrows: (state, data) => {
      state.wayArrows = data.payload
    },
    setWayStatus: (state, data) => {
      state.wayStatuses = data.payload
    }
  }
})

export const { 
  setWay,
  setWayArrows,
  setWayStatus
} = waySlice.actions

export default waySlice.reducer