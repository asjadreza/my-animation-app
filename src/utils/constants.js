export const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL



export const GET_TODOS=`${API_BASE_URL}/todos`
export const ADD_TODO=`${API_BASE_URL}/todos`
export const DELETE_TODO=`${API_BASE_URL}/todos/{{id}}`
export const TOGGLE_TODO=`${API_BASE_URL}/todos/{{id}}/toggle`