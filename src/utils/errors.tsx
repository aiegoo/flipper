/**
 * Copyright 2018-present Facebook.
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 * @format
 */

export class CancelledPromiseError extends Error {
  constructor(msg: string) {
    super(msg);
    this.name = 'CancelledPromiseError';
  }
}
export function getStringFromErrorLike(e: any) {
  if (typeof e == 'string') {
    return e;
  } else if (e instanceof Error) {
    return e.message;
  } else {
    return JSON.stringify(e);
  }
}
