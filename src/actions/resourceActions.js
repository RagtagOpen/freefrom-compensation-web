import { FETCH_FEATURE_RESOURCE, SET_ALERT } from "./types"
import { setAlert } from "actions/alertActions"
import { get } from "utils/api"

export const fetchFeatureResource = (mindsetId, location) => async dispatch => {
  try {
    const resource = await get(
      `/mindsets/${mindsetId}/resources?state=${location}`
    )

    const resourceCategory = await get(
      `/resource_categories/${resource.data.resource_category_id}`
    )

    const featureData = {
      resource: resource.data,
      resourceCategory: resourceCategory.data,
    }

    dispatch({
      type: FETCH_FEATURE_RESOURCE,
      payload: featureData,
    })
  } catch (err) {
    dispatch(setAlert(err.message, "danger"))
  }
}
