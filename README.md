# Personal Website

New and Improved!

Check it out at [olincb.me](https://olincb.me).

This readme is mostly so I can remember how to deploy this site, so feel free to ignore the rest of it.

## TODO

- Move images to subfolder

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
    - A CloudFront Function re-writes /page to /page.html
- Deployment stack is managed by CloudFormation.

### Monitoring

- Logs are in [this S3 Bucket](https://us-east-1.console.aws.amazon.com/s3/buckets/personal-website-customresourcestack--s3bucketlogs-3qszo3omr7vn?region=us-east-1&bucketType=general&tab=objects).

### Deployment

GitHub Actions CICD now handles deployment by building and uploading results to S3, and invalidating the CloudFront cache.
