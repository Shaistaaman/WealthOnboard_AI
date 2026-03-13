# WealthOnboard AI - Backend (Administrative Portal)

This folder contains AWS Lambda functions and backend services for the administrative portal.

## Structure

```
backend/
├── lambdas/                 # AWS Lambda functions
│   ├── auth/               # Authentication services
│   ├── user-management/    # User account management
│   ├── kyc/               # KYC verification workflows
│   ├── financial/         # Financial operations
│   ├── compliance/        # Compliance and audit
│   └── ai-advisor/        # AI Bedrock integration
├── shared/                # Shared utilities and types
├── schemas/              # DynamoDB schemas
└── docs/                 # API documentation
```

## AWS Services Used

- **AWS Lambda**: Serverless functions
- **API Gateway**: REST API endpoints
- **DynamoDB**: NoSQL database
- **S3**: Document storage
- **Step Functions**: Workflow orchestration
- **Amazon Bedrock**: AI services
- **Cognito**: User authentication (if needed)

## Deployment

Manual deployment to AWS services (no IaC/CDK used as per requirements)
