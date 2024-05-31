import { createClient } from '@/prismicio';
import { PrismicNextImage, PrismicNextLink } from '@prismicio/next';
import React from 'react'

type Props = {}

const Footer = async (props: Props) => {
  const client = createClient();
  const settings = await client.getSingle("logo");

  return (
    <footer className={
      `bg-green-900 md:bg-green-800 text-white font-medium flex flex-col gap-y-1.5 py-5 items-center justify-center fixed bottom-0 z-50 w-full`
    }>
      <div className="flex items-center text-sm text-center sm:text-[26px] gap-x-4">
        {settings.data.call_to_networks}
        <ul className="flex items-center gap-x-4">
          {settings.data.social_networks.map(({ url_to_network, social_media_icon }) => (
            <li key={crypto.randomUUID()}>
              <PrismicNextLink field={url_to_network}>
                <PrismicNextImage field={social_media_icon} className="size-5 sm:size-8" />
              </PrismicNextLink>
            </li>
          ))}
        </ul>
      </div>
      <p className="text-[8px] sm:text-xs">{`Copyright © ${new Date().getFullYear()} | ${settings.data.site_title}`}</p>
    </footer>
  )
}

export default Footer