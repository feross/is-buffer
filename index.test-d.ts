import { expectType } from "tsd";
import isBuffer from ".";

expectType<boolean>(isBuffer(Buffer.alloc(4)));
expectType<boolean>(isBuffer(Buffer.allocUnsafeSlow(100)));
expectType<boolean>(isBuffer(undefined));
expectType<boolean>(isBuffer(null));
expectType<boolean>(isBuffer(""));
expectType<boolean>(isBuffer(true));
expectType<boolean>(isBuffer(false));
expectType<boolean>(isBuffer(0));
expectType<boolean>(isBuffer(1));
expectType<boolean>(isBuffer(1.0));
expectType<boolean>(isBuffer("string"));
expectType<boolean>(isBuffer({}));
expectType<boolean>(isBuffer([]));
expectType<boolean>(isBuffer(function foo() {}));
expectType<boolean>(isBuffer({ isBuffer: null }));
expectType<boolean>(
  isBuffer({
    isBuffer() {
      throw new Error();
    },
  })
);

// Typeguard test
const unknownValue: unknown = {};
if (isBuffer(unknownValue)) {
  expectType<Buffer>(unknownValue);
} else {
  expectType<unknown>(unknownValue);
}
