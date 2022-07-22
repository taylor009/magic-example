import { Magic } from "magic-sdk";
import { OAuthExtension } from "@magic-ext/oauth";

export const socialLogins = ["discord", "twitter"];

export const magic = new Magic("pk_live_02F9A871B05F4721", {
  extensions: [new OAuthExtension()],
});
