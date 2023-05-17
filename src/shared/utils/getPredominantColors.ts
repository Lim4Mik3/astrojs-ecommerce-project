import Vibrant from "node-vibrant";
import sharp from "sharp";

type PredominantThemeType = "dark" | "light";

interface Response {
  predominant_theme: PredominantThemeType;
  predominant_light: {
    hex: string;
    rgb: number[];
  };
  predominant_dark: {
    hex: string;
    rgb: number[];
  };
  vibrant_color: {
    hex: string;
    rgb: number[];
  };
}

export async function getPredominantColors(image: any): Promise<Response> {
  const imgBuffer = Buffer.from(image, "binary");

  const imageConvetedToJpeg = await sharp(imgBuffer)
    .jpeg()
    .resize({ width: 100, height: 100 }) // resize image to accelerate recognization process.
    .toBuffer();

  const palette = await Vibrant.from(imageConvetedToJpeg).getPalette();

  const darkPopulation = palette.DarkVibrant.population;
  const lightPopulation = palette.LightVibrant.population;

  let theme: PredominantThemeType =
    darkPopulation > lightPopulation ? "dark" : "light";

  return {
    vibrant_color: {
      hex: palette.Vibrant.hex,
      rgb: palette.Vibrant.rgb,
    },
    predominant_light: {
      hex: palette.LightVibrant.hex,
      rgb: palette.LightVibrant.rgb,
    },
    predominant_dark: {
      hex: palette.DarkVibrant.hex,
      rgb: palette.DarkVibrant.rgb,
    },
    predominant_theme: theme,
  };
}

// function rgbToHex(r: number, g: number, b: number) {
//   return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
// }
