# Website Optimization Challenge
Optimize a website to gain at least a 90/100 for desktop and mobile on Google's PageSpeed Tool and run at 60 FPS while scrolling. Techniques utilized to optimize website include:
* Javascript and CSS minification.
* Image compression.
* Improve page Critical Rendering Path (CRP).
* Responsive images.
* Google Chrome development tools.
* Refactor Javascript.

## Table of Contents
* [Installation and Run](#installation-and-run)
* [Optimization Steps](#optimization-steps)
* [Creator](#creator)
* [Copyright and License](#copyright-and-license)

## Installation and Run
Grab code source:
1. Clone repository: `git clone https://github.com/brianquach/udacity-nano-front-optimization.git` or download the zip [here](https://github.com/brianquach/udacity-nano-front-optimization/archive/master.zip).
2. Navigate to the directory where you cloned the repo or unzipped the file to and open folder `dist`.
3. Use your favorite browser to open `index.html`

*Developers (optional)*:
4. Install [Gulp](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md)

## Optimization Steps
1. Asynchronously download non-critical javascript by adding `async` script attribute.
2. Move importing CSS and Google Fonts to bottom of HTML body.
3. Gulp task to compresses all images.
4. Gulp task to create thumbnail version of pizzeria.jpg for `index.html`.

## Creator
**Brian Quach**
* <https://github.com/brianquach>
* <http://bkquach.com>

## Copyright and License
Code copyright 2016 Brian Quach. Code released under the [MIT license](https://github.com/brianquach/udacity-nano-front-optimization/blob/master/LICENSE).
