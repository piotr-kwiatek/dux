// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Language = 'PL' | 'EN'

export type Manual = {
  name: string
  link: string
  modelId: string
  languages: Language[]
  pdfFileUrl: string
  coverManualPhotoUrl: string
}

export const manuals: Manual[] = [
  {
    name: "Lampka biurkowa USB z ładowarką indukcyjną",
    modelId: "0W-390202",
    link: "smukee-lampka-z-indukcja",
    languages: ["PL"],
    pdfFileUrl: "/manuals/pl/instrukcja-smukee-lampka-z-ladowarka-indukcyjna.pdf",
    coverManualPhotoUrl: "/assets/manual-cover/0w-390202-pl.jpg"
  },
  {
    name: "USB desk lamp with inductive charger",
    modelId: "0W-390202",
    link: "smukee-lamp-with-inductive-charger",
    languages: ["EN"],
    pdfFileUrl: "/manuals/en/manual-smukee-lamp-with-inductive-charger.pdf",
    coverManualPhotoUrl: "/assets/manual-cover/0w-390202-en.jpg"
  },
  {
    name: "Webcam like Xiaomi (Imilab CMSXJ22A 2MP)",
    modelId: "CMSXJ22A",
    link: "camera-imilab-cmsxj22a",
    languages: ["EN"],
    pdfFileUrl: "/manuals/en/manual-camera-like-xiaomi-imilab-CMSXJ22A.pdf",
    coverManualPhotoUrl: "/assets/manual-cover/webcam-en.jpg"
  }
]

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Manual[]>
) {
  res.status(200).json(manuals)
}
