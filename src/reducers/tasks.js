/*
Copyright 2019 The Tekton Authors
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
    http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

import { createNamespacedReducer } from './reducerCreators';
import { ALL_NAMESPACES } from '../constants';

export default () => createNamespacedReducer({ type: 'Task' });

export function getTasks(state, namespace) {
  if (namespace === ALL_NAMESPACES) {
    return Object.values(state.byId);
  }

  const tasks = state.byNamespace[namespace];
  return tasks ? Object.values(tasks).map(id => state.byId[id]) : [];
}

export function getTask(state, name, namespace) {
  const tasks = state.byNamespace[namespace] || {};
  const taskId = tasks[name];
  return taskId ? state.byId[taskId] : null;
}

export function getTasksErrorMessage(state) {
  return state.errorMessage;
}

export function isFetchingTasks(state) {
  return state.isFetching;
}
