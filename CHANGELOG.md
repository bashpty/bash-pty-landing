# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [1.2.0](https://github.com/cssninjaStudio/tairo/compare/v1.1.1...v1.2.0) (2023-09-11)


### Features

* add calendar app ([125ff0c](https://github.com/cssninjaStudio/tairo/commit/125ff0ca3dcb32b721acd19439fc1f197f49dc85))
* add overlay to sidebar and collapse layout on small screens, close [#98](https://github.com/cssninjaStudio/tairo/issues/98) ([5baed24](https://github.com/cssninjaStudio/tairo/commit/5baed24bec33eebd59eb5eb6d467be2060dcf92a))
* add topnav layout layer, add layout switcher composable and refactor component, add landing section ([3924949](https://github.com/cssninjaStudio/tairo/commit/39249494c301f1396062d97344fd4eacc36cb3d3))
* doc content updates, recursive demo extraction, close [#118](https://github.com/cssninjaStudio/tairo/issues/118), close [#121](https://github.com/cssninjaStudio/tairo/issues/121) ([745e854](https://github.com/cssninjaStudio/tairo/commit/745e854a16c978eb540d4f83c02a074117ec8d32))
* replace parcel watcher with new chokidar granular ([0e7c9fd](https://github.com/cssninjaStudio/tairo/commit/0e7c9fd48d9d8fe06de057114ae41d52ab861f52))
* replace unplugin-fonts with variable fontsource + downgrade to nuxt 3.6.5 due to perfs ([295565b](https://github.com/cssninjaStudio/tairo/commit/295565bc0c347d31a68bb9ddc7d35ba4e26f3048))
* upgrade @shuriken-ui/nuxt ([56ec37a](https://github.com/cssninjaStudio/tairo/commit/56ec37acbd368a4940980ec544dc058d8c280120))
* upgrade to nuxt 3.7.0 + shuriken-ui/nuxt to 1.0.0 ([e8c560c](https://github.com/cssninjaStudio/tairo/commit/e8c560cd37406fed36e4618be64673c8704b46af))


### Bug Fixes

* allow using panels with empty layout ([d36cb24](https://github.com/cssninjaStudio/tairo/commit/d36cb24939502b56a0d4952addf5d1c49f23c4d0))
* **collapse-layer:** allow to position elements at the end of navigation ([dd839b1](https://github.com/cssninjaStudio/tairo/commit/dd839b1b9b054596d52ab8082bd53286f46c594b))
* **documentation:** update layers orders in setup ([b85e53d](https://github.com/cssninjaStudio/tairo/commit/b85e53d537ced9032ee07c83755c728d5db8765c)), closes [#101](https://github.com/cssninjaStudio/tairo/issues/101)
* **formatters:** move date template helpers to demo layer ([574daf9](https://github.com/cssninjaStudio/tairo/commit/574daf9fd5fca3e6db672a157103e01577ff4bdf)), closes [#103](https://github.com/cssninjaStudio/tairo/issues/103)
* **landing-layer:** add landing layout with panels ([4e8aa54](https://github.com/cssninjaStudio/tairo/commit/4e8aa54e4a1143eacf30fcdc697de67021fe76df))
* **layout-switcher:** only show colors when can not change layout + show on landing ([2f27f24](https://github.com/cssninjaStudio/tairo/commit/2f27f246680966762203c899b8b88a992e708b9e))
* personal dashboard 3 responsive styles, close [#94](https://github.com/cssninjaStudio/tairo/issues/94) ([9ff0aad](https://github.com/cssninjaStudio/tairo/commit/9ff0aadd3d3afd756a1bac65035ca9f8777eda0e))
* **purge-comments:** remove capturing group in regex ([a03c3f7](https://github.com/cssninjaStudio/tairo/commit/a03c3f79dc951eeec00e9d65a23242577e2090df)), closes [#102](https://github.com/cssninjaStudio/tairo/issues/102)
* RTL issues, close [#90](https://github.com/cssninjaStudio/tairo/issues/90) ([e569156](https://github.com/cssninjaStudio/tairo/commit/e5691567e17ed9fa39321b68c5d3581b5e715af5))
* **TairoContentWrapper:** hide actions if no slots are provided ([ef5a814](https://github.com/cssninjaStudio/tairo/commit/ef5a814bdda06c4b681962a9254ddbada1fe79fb))
* typo in api documentation, close [#109](https://github.com/cssninjaStudio/tairo/issues/109) ([ca1418b](https://github.com/cssninjaStudio/tairo/commit/ca1418beee3f6fe5b8cafe97de2b6b16099291ba))

### [1.1.1](https://github.com/cssninjaStudio/tairo/compare/v1.1.0...v1.1.1) (2023-05-16)

## [1.1.0](https://github.com/cssninjaStudio/tairo/compare/v1.0.2...v1.1.0) (2023-05-16)


### Features

* add layout switcher, todo: implement colors change, fix messaging links and small bug ([45c82b4](https://github.com/cssninjaStudio/tairo/commit/45c82b48ef1142d129354558bafb4eaaa5786439))
* add more preset colors in layout switcher ([04dba3d](https://github.com/cssninjaStudio/tairo/commit/04dba3dd7ab6524586a6090ba67678f11977695d))


### Bug Fixes

* auth pages illustrations ([f6f08ae](https://github.com/cssninjaStudio/tairo/commit/f6f08ae9438ddc4728f6c9aec3e59179d7c57a5f))
* collapse navigation item click event ([9975840](https://github.com/cssninjaStudio/tairo/commit/99758406424e0d7c9dbfdb423754744b76d09620))
* landing demos page navbar group ([66c583f](https://github.com/cssninjaStudio/tairo/commit/66c583ffaccd10fe92714ebf0cf09e6ae1ea95e2))
* rgb hex color conversion ([0c8aef7](https://github.com/cssninjaStudio/tairo/commit/0c8aef74043e0a98853ba1627cd0c7cf5640b49f))

### [1.0.2](https://github.com/cssninjaStudio/tairo/compare/v1.0.1...v1.0.2) (2023-05-04)


### Bug Fixes

* missing auth illustrations, fix login top section hidden on resize ([#84](https://github.com/cssninjaStudio/tairo/issues/84)) ([238abf0](https://github.com/cssninjaStudio/tairo/commit/238abf0db203f0891f577c58a65369839ae84da7))

### [1.0.1](https://github.com/cssninjaStudio/tairo/compare/v1.0.0...v1.0.1) (2023-05-03)

## 1.0.0 (2023-05-03)


### Features

* initial release ([bc6ac10](https://github.com/cssninjaStudio/tairo/commit/bc6ac1001a9c22edbaec91bd8c63299217a2496f))
