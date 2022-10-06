import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const URL = 'https://api.spacexdata.com/v3/missions';

export const fetchingMissionsInfo = createAsyncThunk(
  'missions/fetchingMissionsInfo',
  async () => {
    const response = await fetch(URL);
    const data = await response.json();

    const missionsInfo = data.map((mission) => ({
      joinStatus: false,
      id: mission.mission_id,
      name: mission.mission_name,
      description: mission.description,
    }));
    return missionsInfo;
  },
);

const initialState = [];
export const missionSlice = createSlice({
  name: 'mission',
  initialState,
  reducers: {
    toggleJoinMission: (state, action) => state.map((mission) => {
      if (mission.id === action.payload) {
        return { ...mission, joinStatus: !mission.joinStatus };
      }
      return mission;
    }),
  },
  extraReducers: {
    [fetchingMissionsInfo.fulfilled]: (state, action) => action.payload,
  },
});

export const { toggleJoinMission } = missionSlice.actions;
export default missionSlice.reducer;
