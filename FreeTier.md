# AWS Free Tier Analysis for WealthOnboard AI

**Micro-Lambda approach within AWS Free Tier limits** Here's the breakdown:

## Free Tier Analysis for Micro-Lambda + Cognito Architecture

### AWS Cognito (User Management)

- **Free Tier**: 50,000 Monthly Active Users (MAUs)
- **Your Usage**: Financial app likely has <1,000 users initially
- **Status**: ✅ **Well within free tier**

### API Gateway

- **Free Tier**: 1 million API calls/month
- **Your Usage**: ~4 Lambdas × average usage = still under 1M calls
- **Status**: ✅ **Within free tier**

### Lambda Functions (4 separate functions)

- **Free Tier**: 1M requests + 400K GB-seconds/month
- **Your Lambdas**: Auth, Onboarding, Dashboard, Admin
- **Typical Usage**:
  - Auth: High frequency but lightweight
  - Onboarding: Medium frequency, medium processing
  - Dashboard: High frequency, light-medium processing
  - Admin: Low frequency, medium processing
- **Status**: ✅ **Within free tier** (distribute load across 4 functions)

### EventBridge

- **Free Tier**: 14 million events/month
- **Your Usage**: Inter-service communication (minimal events)
- **Status**: ✅ **Well within free tier**

### DynamoDB

- **Free Tier**: 25GB storage + 25 RCU/WCU
- **Your Usage**: User profiles, onboarding data, documents metadata
- **Status**: ✅ **Within free tier**

### S3 (Document Storage)

- **Free Tier**: 5GB storage + 20K GET + 2K PUT requests
- **Your Usage**: KYC documents, profile images
- **Status**: ✅ **Within free tier**

### Bedrock (AI Features)

- **Free Tier**: 20K tokens/month
- **Your Usage**: Document analysis, risk assessment
- **Status**: ✅ **Within free tier**

## Recommended Micro-Lambda Architecture

### Lambda Functions

1. **Auth Lambda** (`/auth/*`)

   - Login, signup, token refresh
   - Cognito integration
   - JWT token generation

2. **Onboarding Lambda** (`/onboarding/*`)

   - Customer info, KYC, documents
   - Bedrock document processing
   - Compliance checks

3. **Dashboard Lambda** (`/dashboard/*`)

   - User data retrieval
   - Portfolio information
   - Analytics data

4. **Admin Lambda** (`/admin/*`)
   - RIA-only functions
   - User management
   - Reporting

### API Gateway Routing

```
/api/auth/* → Auth Lambda
/api/onboarding/* → Onboarding Lambda
/api/dashboard/* → Dashboard Lambda
/api/admin/* → Admin Lambda (RIA only)
```

### Cognito Integration Benefits

- **Built-in Security**: MFA, password policies, account recovery
- **Social Logins**: Google, Facebook integration if needed
- **User Pools**: Separate pools for Investors vs RIAs
- **JWT Tokens**: Automatic token management
- **Lambda Triggers**: Custom auth flows

### EventBridge Communication

- **Onboarding Complete** → Dashboard Lambda (update user status)
- **Document Uploaded** → Admin Lambda (notify RIA)
- **Compliance Status Change** → Multiple services

### Security Considerations

- **JWT tokens** with role claims (investor/ria)
- **Lambda authorizer** for API Gateway
- **DynamoDB fine-grained access** based on user type
- **S3 pre-signed URLs** for secure document uploads

## Cost Optimization Tips

1. **Lambda Memory**: Start with 128MB, optimize based on performance
2. **DynamoDB**: Use on-demand billing initially
3. **S3**: Lifecycle policies for old documents
4. **CloudWatch**: Basic monitoring only

## Scaling Considerations

- **Current Setup**: Handles ~10K users easily within free tier
- **Growth Path**: Can scale to 100K+ users with minimal cost increase
- **Monitoring**: CloudWatch alarms for free tier limits

## Database Strategy

- **Single DynamoDB Table** with composite keys
- **Partition Key**: `user_type#user_id` (e.g., `investor#123`, `ria#456`)
- **Sort Key**: `feature#timestamp` (e.g., `profile#2024-01-01`, `kyc#2024-01-02`)
- **GSI**: For cross-queries (e.g., RIA viewing all investor profiles)

## Conclusion

Your Micro-Lambda + Cognito architecture will comfortably stay within AWS Free Tier limits while providing excellent scalability and security for your financial application.

The architecture supports:

- ✅ Up to 10K users within free tier
- ✅ Secure authentication and authorization
- ✅ Scalable microservices pattern
- ✅ AI-powered document processing
- ✅ Real-time inter-service communication
- ✅ Regulatory compliance features
