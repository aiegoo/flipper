/**
 * Copyright 2018-present Facebook.
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 * @format
 */

declare module 'get-port' {
  const getPort: (options?: {
    readonly port?: number;
    readonly host?: string;
  }) => Promise<number>;
  export default getPort;
}
