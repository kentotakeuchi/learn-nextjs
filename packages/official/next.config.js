const path = require('path')

module.exports = {
  // customizing sass options
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  },
  // image optimization
  images: {
    // domains
    // To enable Image Optimization for images hosted on an external website, use an absolute url for the Image src and specify which domains are allowed to be optimized
    domains: ['example.com'],
    // loader
    // If you want to use a cloud provider to optimize images instead of using the Next.js' built-in Image Optimization, you can configure the loader and path prefix
    loader: 'imgix',
    path: 'https://example.com/myaccount/'
  },
  // amp
  amp: {
    // You can set up custom AMP validator in next.config.js as shown below:
    validator: './custom_validator.js',
    // To turn off AMP validation add the following code to next.config.js
    skipValidation: true
  }
}
