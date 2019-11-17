import {
  FETCH_FEATURE_RESOURCE,
  FETCH_RESOURCE_CATEGORIES,
  FETCH_RESOURCE_FOR_STATE,
} from "./types"
import { setAlert } from "actions/alertActions"
import { get } from "utils/api"

export const fetchResourceForState = (
  resourceCategorySlug,
  location
) => async dispatch => {
  try {
    const resource = await get(
      `/resource_categories/${resourceCategorySlug}/resources?state=${location}`
    )

    dispatch({
      type: FETCH_RESOURCE_FOR_STATE,
      payload: {
        state: location,
        category: resourceCategorySlug,
        resource: resource.data,
      },
    })
  } catch (err) {
    dispatch(setAlert(err.message, "danger"))
  }
}

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

export const fetchResourceCategories = () => async dispatch => {
  try {
    const categories = await get(`/resource_categories`)

    dispatch({
      type: FETCH_RESOURCE_CATEGORIES,
      payload: categories.data,
    })
  } catch (err) {
    dispatch(setAlert(err.message, "danger"))
  }
}
