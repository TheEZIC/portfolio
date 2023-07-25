export type RGBColor = {
  R: string;
  G: string;
  B: string;
};

export type RGBAColor = {
  A: string;
} & RGBColor

export type ParseColorResult = {
  A?: string;
} & RGBColor

export class ColorUtil {
  private static hexRegExp = /#(?<R>\w{1,2})(?<G>\w{1,2})(?<B>\w{1,2})(?<A>\w{1,2})?$/i;
  private static rgbaRegExp = /rgb(a)?\((?<R>\d+),(?<G>\d+),(?<B>\d+)(,(?<A>\d+))?\)$/i;

  public static toHex(color: string): string {
    color = color.replace(/ /g, "").trim();

    if (!this.rgbaRegExp.test(color)) {
      throw new Error("Wrong color provided");
    }

    const { R, G, B, A } = this.parseColorResult(this.rgbaRegExp, color, this.convertDecimalStringToHexColorString);

    return A ? `#${R}${G}${B}${A}` : `#${R}${G}${B}`;
  }

  public static toRgb(color: string): string {
    color = color.trim();

    if (!this.hexRegExp.test(color)) {
      throw new Error("Wrong color provided");
    }

    const { R, G, B, A } = this.parseColorResult(this.hexRegExp, color, this.convertHexStringToDecimalColorString);

    return A ? `rgba(${R}, ${G}, ${B}, ${A})` : `rgb(${R}, ${G}, ${B})`;
  }

  private static parseColorResult(
    regexp: RegExp,
    color: string,
    convertStrategy?: (value: string) => string
  ): ParseColorResult {
    let result = regexp.exec(color)!.groups! as ParseColorResult;
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

  private static convertDecimalStringToHexColorString(str: string): string {
    let hex = this.convertStringNumberNumericSystem(str, 10, 16).toUpperCase();

    if (hex.length < 2) {
      hex = hex.padStart(2, "0");
    }

    return hex;
  }

  private static convertHexStringToDecimalColorString(str: string): string {
    return this.convertStringNumberNumericSystem(str, 16, 10);
  }

  private static convertStringNumberNumericSystem(str: string, from: number, to: number): string {
    return parseInt(str, from).toString(to);
  }
}
