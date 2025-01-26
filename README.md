# Personal Website

New and Improved!

Check it out at [olincb.me](https://olincb.me).

This readme is mostly so I can remember how to deploy this site, so feel free to ignore the rest of it.

## Development

All npm run scripts are run from the `personal-site` directory.

- Start dev server with `npm run dev`.
- Make production build with `npm run build` and `npm run start`.
- Lint and format with `npm run lint` and `npm run format`.

## Deployment

### DNS

- Domain is registered with SquareSpace Domains.
    - Configured to use AWS nameservers.
- DNS is managed by AWS Route 53 on a hosted zone.

### Hosting

- Site is hosted on S3.
- CloudFront is used as a CDN.
- Deployment stack is managed by CloudFormation.
