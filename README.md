# Přednášky předmětu PVA2

## Obsah
| Přednáška | Odkaz na prezentaci |
|-----------|----------------------|
| 01. Úvod do Python | [Odkaz](./prednasky/01_uvod_do_python.md) |
2. [Úvod do Python](./prednasky/01_uvod_do_python.md)


## Spouštění pro vývoj

```shell
npm install
npm run dev Slides_my_slides.md
npm run dev # pro spuštění všech prezentací
```

Navštívit: <http://localhost:3030>

## Deploy do GitHub Pages

### Poprvé

Pro první deployment:

  1. GitHub Repo > Settings > GitHub Pages
  2. Nastavit **Source** na `gh-pages` branch

### Format Slide Deck

```shell
npm run format Slides_my_slides.md

Příklad:
npm run format Slides_Book_ConnectingParagraphs.md
```

### Upload Slidev via GitHub Actions
Nasazení se odesílají pomocí commit zpráv:

```bash
git add SLIDES_NAME.md

git commit -m "Upload: SLIDES_NAME"

git push
```

## Příkazy

| Příkaz                          | Účel                                 |
|---------------------------------|--------------------------------------|
| `npm run format SLIDES_NAME.md` | Formátování souboru markdown         |
| `npm run build SLIDES_NAME.md`  | Sestavení pro produkční SPA          |
| `npm run dev SLIDES_NAME.md`    | Start dev server                     |
| `npm run export SLIDES_NAME.md` | Exportovat prezentace do formátu pdf |

## Zdroje k vytvíření prezentací s Slidev

* [Slidev documentations](https://sli.dev/)
* [fguisso/talks Repo](https://github.com/fguisso/talks)
* [antfu/talks Repo](https://github.com/antfu/talks)
* [ahandsel/debugging_log/SliDev_LightVue](https://github.com/ahandsel/debugging_log/tree/master/SliDev_LightVue)
* [npx slidev --help](https://github.com/ahandsel/debugging_log/blob/master/SliDev_LightVue/SliDev_Basic/SliDev_Help.md#npx-slidev---help)

## Additional Notes

Image Sizes

* Slide backgrounds: 1600 px by 900 px
* Vertical thin slots: 400 px by 900 px


## Pomocnici a inspirace
- `slidev --entry slides\01_uvod_do_python.md` 
- `monochrome icons`
- Install dependencies with `pnpm install`.
- Generate a new talk with `pnpm generate`.

ChatGPT image prompt
A highly detailed digital illustration of a blue humanoid lizard wearing a blue hoodie with orange accents, sitting at a wooden desk and typing on a laptop. 
The lizard has realistic scales, expressive eyes, and is focused on the screen. 
The background is a simple gradient, drawing attention to the lizard and the laptop.
The overall color palette is predominantly blue with hints of orange and neutral tones.


A digital illustration of an anthropomorphic fox character with orange fur and a spiky hairstyle, wearing a red jacket with patches, a grey shirt, and blue pants. The character has a tough and determined expression, with large ears and a bushy tail. The background is a solid teal color, and the overall style is detailed and vibrant, with a cartoonish yet edgy appearance.

A digital illustration of an anthropomorphic fox with orange fur, wearing a blue hoodie with the hood up, giving an intense look. The fox is holding a tablet with an apple logo and a stylus pen, creating a focused and determined expression. Various small objects such as dice, cans, and gadgets are floating around the fox, set against a dark background. The style is cartoonish with bold lines and vibrant colors.

A digital illustration of two cute, fluffy monsters. The larger monster is blue with big, round eyes, and it is focused on using a colorful tablet on a desk. The smaller monster, also blue and fluffy with a horn on its head, is sitting on a yellow device next to a stack of books with glasses on top. The background is a gradient of warm colors, ranging from pink to orange. The style is whimsical and colorful, with detailed fur textures and a playful atmosphere.