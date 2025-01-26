# Personal Website

New and Improved!

Check it out at [olincb.me](https://olincb.me).

This readme is mostly so I can remember how to deploy this site, so feel free to ignore the rest of it.

## TODO

- Move images to subfolder
- CICD
- debug why resume embed doesn't work
- debug why youtube embeds don't work

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

- Site is hosted [on S3](https://us-east-1.console.aws.amazon.com/s3/buckets/personal-website-customresourcestack--s3bucketroot-euxeofbkc8tn?region=us-east-1&bucketType=general&tab=objects).
- CloudFront is used as a CDN.
    - Content-Security-Policy is not totally secure because next.js requires unsafe-inline for SSG.
    - TODO: maybe [this workaround](https://github.com/vercel/next.js/discussions/54907#discussioncomment-8764285) to create hashes for all inline scripts?
- Deployment stack is managed by CloudFormation.

### Monitoring

- Logs are in [this S3 Bucket](https://us-east-1.console.aws.amazon.com/s3/buckets/personal-website-customresourcestack--s3bucketlogs-3qszo3omr7vn?region=us-east-1&bucketType=general&tab=objects).

### Deployment

1. Upload `out/` files to [S3 bucket](https://us-east-1.console.aws.amazon.com/s3/buckets/personal-website-customresourcestack--s3bucketroot-euxeofbkc8tn?region=us-east-1&bucketType=general&tab=objects).
2. [Invalidate CloudFront cache](https://us-east-1.console.aws.amazon.com/cloudfront/v4/home?region=us-east-1#/distributions/E1GH1B8SMFLGEK/invalidations).
3. Rename all html files other than `index.html` to remove `.html` extension. This is because S3 doesn't rename requests for e.g. `/about` to `/about.html`.
