import type {
  ImageTransform,
  LocalImageService,
  ImageOutputFormat,
  AstroConfig,
} from "astro";
import sharpService from "astro/assets/services/sharp";
import sharp from "sharp";

type LocalImageTransform = {
  src: string;
  [key: string]: any;
};

const service: LocalImageService<AstroConfig["image"]> = {
  validateOptions(
    options: ImageTransform,
    imageConfig: AstroConfig["image"],
  ): ImageTransform | Promise<ImageTransform> {
    return sharpService.validateOptions?.(options, imageConfig) ?? options;
  },

  async transform(
    inputBuffer: Uint8Array,
    transform: LocalImageTransform,
    imageConfig: AstroConfig["image"],
  ): Promise<{
    data: Uint8Array;
    format: ImageOutputFormat;
  }> {
    const { format, width, height, quality } = transform;
    const q = isNaN(parseInt(quality)) ? 90 : parseInt(quality);

    if (!["avif", "webp", "jpeg"].includes(format)) {
      return await sharpService.transform(inputBuffer, transform, imageConfig);
    }

    let pipeline = sharp(inputBuffer).resize(width, height);

    if (format === "avif") {
      pipeline = pipeline.avif({
        quality: q,
        effort: import.meta.env.MODE === 'development' ? 1 : 9,
        chromaSubsampling: "4:2:0",
        bitdepth: 8,
      });
    }

    if (format === "webp") {
      pipeline = pipeline.webp({
        quality: q,
        effort: import.meta.env.MODE === 'development' ? 1 : 9,
        smartSubsample: true,
        smartDeblock: true
      });
    }

    if (format === "jpeg") {
      pipeline = pipeline.jpeg({
        quality: q,
      });
    }

    return {
      data: await pipeline.toBuffer(),
      format: format,
    };
  },

  parseURL(url: URL, imageConfig: AstroConfig["image"]) {
    return sharpService.parseURL(url, imageConfig);
  },

  getURL(
    options: ImageTransform,
    imageConfig: AstroConfig["image"],
  ): string | Promise<string> {
    return sharpService.getURL(options, imageConfig);
  },

  getSrcSet(options: ImageTransform, imageConfig: AstroConfig["image"]) {
    return sharpService.getSrcSet?.(options, imageConfig) ?? [];
  },

  getHTMLAttributes(
    options: ImageTransform,
    imageConfig: AstroConfig["image"],
  ) {
    return sharpService.getHTMLAttributes?.(options, imageConfig) ?? {};
  },
};

export default service;
