import facebookIcon from '../../assets/social-media/facebook.png'
import instagramIcon from '../../assets/social-media/instagram.png'
import tiktokIcon from '../../assets/social-media/tiktok.png'
import youtubeIcon from '../../assets/social-media/youtube.png'

const socialLinks = [
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/',
    icon: facebookIcon,
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/',
    icon: instagramIcon,
  },
  {
    name: 'TikTok',
    href: 'https://www.tiktok.com/',
    icon: tiktokIcon,
  },
  {
    name: 'YouTube',
    href: 'https://www.youtube.com/',
    icon: youtubeIcon,
  },
]

function Follow() {
  return (
    <div className="space-y-6 text-center text-white">
      <h2 className="text-2xl font-semibold tracking-tight">
        Trouvez-nous sur :
      </h2>

      <div className="flex items-center justify-center gap-4">
        {socialLinks.map((socialLink) => (
          <a
            key={socialLink.name}
            href={socialLink.href}
            target="_blank"
            rel="noreferrer"
            aria-label={socialLink.name}
            className="rounded-full bg-white/10 p-3 transition hover:bg-white/20"
          >
            <img
              src={socialLink.icon}
              alt={socialLink.name}
              className="h-7 w-7 object-contain"
            />
          </a>
        ))}
      </div>
    </div>
  )
}

export default Follow
