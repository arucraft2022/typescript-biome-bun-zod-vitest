import { z } from "zod";

// 引数のスキーマを定義します。数値であることを検証します。
const numberSchema = z.number();

export function sum(a: number, b: number): number {
  // 引数が数値であるかを検証します
  numberSchema.parse(a);
  numberSchema.parse(b);

  // 検証が成功した場合、合計を計算します
  return a + b;
}
