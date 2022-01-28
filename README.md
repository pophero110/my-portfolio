Website: http://my-portfolio-by-jeff.s3-website.us-east-2.amazonaws.com/

## Deployment

<!-- S3 bucket static website hosting -->
<!-- Windows Subsystem for Linux  -->

1. create a S3 bucket
2. create IAM user with s3 service full access
3. install [awscli](<(https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html)>)
4. run 'aws configure'
5. enter IAM user access key and secret key (use 'aws s3 ls' to check if properly set up the aws credentials)
6. enable static website hosting under the properties tab of your S3 bucket
7. edit bucket permission and bucket policy to allow public read access to the static website
8. run 'yarn install'
9. run 'yarn build'
10. add github repository secrets for aws credentialas 
11. add "deploy": "aws s3 sync build/ s3://your-bucket-name under the script secion of package.json
12. run 'yarn deploy'
13. visit your webiste

## CI/CD

Github Actions. https://docs.github.com/en/actions  
AWS Actions https://github.com/aws-actions

1. setup aws credentials
2. deploy/upload build to S3 bucket

## Bootstrap

Source: https://github.com/react-bootstrap/react-bootstrap  
Documentation: https://react-bootstrap.github.io
