type RGBColor = {
  R: string;
  G: string;
  B: string;
};

type RGBAColor = {
  A: string;
} & RGBColor

type ParseColorResult = {
  A?: string;
} & RGBColor

export class ColorUtil {
  private static hexRegExp = /#(?<R>\w{1,2})(?<G>\w{1,2})(?<B>\w{1,2})(?<A>\w{1,2})?$/i;
  private static rgbaRegExp = /rgb(a)?\((?<R>\d+),(?<G>\d+),(?<B>\d+)(,(?<A>\d+))?\)$/i;

  public static toHex(color: string) {
    color = color.replace(/ /g, "").trim();

    if (!this.rgbaRegExp.test(color)) {
      throw new Error("Wrong color provided");
    }

    const result = this.parseColorResult(this.rgbaRegExp, color, this.convertDecimalStringToHexColorString);
    const { R, G, B, A } = result;

    return A ? `#${R}${G}${B}${A!}` : `#${R}${G}${B}`
  }

  public static toRgb(color: string) {
    color = color.trim();

    if (!this.hexRegExp.test(color)) {
      throw new Error("Wrong color provided");
    }

    const result = this.parseColorResult(this.hexRegExp, color, this.convertHexStringToDecimalColorString);
    const { R, G, B, A } = result;

    return A ? `rgba(${R}, ${G}, ${B}, ${A})` : `rgb(${result.R}, ${result.G}, ${result.B})`;
  }

  private static parseColorResult(
    regexp: RegExp,
    color: string,
    convertStrategy?: (value: string) => string
  ): ParseColorResult {
    let result = regexp.exec(color)!.groups! as ParseColorResult;
    console.log(result, "r")
    result = convertStrategy ? this.convertRgbaResult(result, convertStrategy) : result;

    return result
  }

  private static convertRgbaResult(result: ParseColorResult, convertStrategy: (value: string) => string): ParseColorResult {
    const output: Partial<ParseColorResult> = {};

    for (let [key, value] of Object.entries(result)) {
      if (result[key as keyof ParseColorResult]) {
        output[key as keyof ParseColorResult] = convertStrategy(value);
      }
    }

    return output as ParseColorResult;
  }

  private static convertDecimalStringToHexColorString(str: string) {
    let hex = parseInt(str, 10).toString(16).toUpperCase();

    if (hex.length < 2) {
      hex = hex.padStart(2, "0");
    }

    return hex;
  }

  private static convertHexStringToDecimalColorString(str: string): string {
    return parseInt(`0x${str}`, 16).toString(10);
  }
}
