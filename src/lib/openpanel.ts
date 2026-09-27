import { OpenPanel } from "@openpanel/web"

const clientId = process.env.NEXT_PUBLIC_OPENPANEL_CLIENT_ID

/** Null until an OpenPanel client id is configured, so nothing is sent. */
export const op = clientId
  ? new OpenPanel({
      clientId,
      trackScreenViews: true,
    })
  : null
