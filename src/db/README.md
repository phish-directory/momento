drizzle.config.ts is in the root directory of the project, 
.env looks a bit like:
```
DB_NAME = "momento_typescript_dev"
DB_USER = "postgres"
DB_PORT = "5432"
DATABASE_URL=postgresql://$DB_USER:password@host:port/database # yeah I need to fix that
S3_URL = "s3.hogwarts.dev"
S3_ACCESS_KEY = "REDACTED"
S3_SECRET_KEY = "REDACTED"
S3_BUCKET_NAME = "momento-test-python"
API_KEY = "REDACTED"
```

Schemas are located in src/db/schema/ directory

Ideally have database object(might already have one but I can't figure out how to use it lol) in db.ts, which would be accessed in a lot of utils/ files + other stuff.
