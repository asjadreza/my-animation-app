import axios from "axios";

import { GET_TODOS, ADD_TODO, DELETE_TODO, TOGGLE_TODO } from "../utils/constants";

export default class TodoService {
  static getTodos() {
    const httpOptions = { headers: { "Content-Type": "application/json" } };
    return axios.get(GET_TODOS, httpOptions);
  }

  static addTodo(text) {
    const httpOptions = { headers: { "Content-Type": "application/json" } };
    return axios.post(ADD_TODO, { text }, httpOptions);
  }

  static deleteTodo(id) {
    const httpOptions = { headers: { "Content-Type": "application/json" } };
    return axios.delete(DELETE_TODO.replace("{{id}}", id), httpOptions);
  }

  static toggleTodo(id) {
    const httpOptions = { headers: { "Content-Type": "application/json" } };
    return axios.patch(TOGGLE_TODO.replace("{{id}}", id), httpOptions);
  }
}
