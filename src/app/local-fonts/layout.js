import localFont from 'next/font/local'

const SanFrancisco = localFont({
  src: '../static-fonts/San-Francisco.otf',
  display: 'swap',
})

export default function LocalFontLayout({children}){
    return (
        <div className={SanFrancisco.className}>
            {children}
        </div>
    )
}