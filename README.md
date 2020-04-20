# MATTPYE.COM

Personal website. Keep it simple.


## S3 sync
```
aws-vault exec mattpye
aws s3 sync . s3://www.mattpye.com/ --acl public-read --exclude "README.md" --exclude ".git*" --exclude ".DS_Store"
```
