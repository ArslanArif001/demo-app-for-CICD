# Data Analytics Infrastructure

Terraform setup for the **Data Analytics Platform**, managing environments for `dev`, `qa`, `staging`, and `prod`.

This repository provisions and manages shared data analytics resources such as **Redshift**, **QuickSight**, **OpenSearch**, and related components.

---

## 📁 Repository Structure

```
data-analytics-infra/
├── bootstrap/
│   └── infra/
│       ├── dev/          # Remote state for us-east-1 (used by dev & qa)
│       └── prod/         # Remote state for us-east-2 (used by staging & prod)
├── modules/              # Reusable Terraform modules (e.g., redshift, sgs)
└── projects/
    └── data-analytics/
        └── envs/
            ├── dev/
            ├── qa/
            ├── staging/
            └── prod/
```

---

## 🚀 Usage

### 1. **Bootstrap Remote State**

Run once per region to create the S3 bucket and DynamoDB table for backend state:

```bash
cd bootstrap/infra/dev        # us-east-1 (for dev + qa)
terraform init
terraform apply
```

```bash
cd bootstrap/infra/prod       # us-east-2 (for staging + prod)
terraform init
terraform apply
```

### 2. **Initialize an Environment**

From the desired environment directory (e.g., `dev`):

```bash
cd projects/data-analytics/envs/dev
terraform init -backend-config="backend.hcl" -backend-config="profile=pentest-dev"
terraform plan
terraform apply
```

Each environment points to the correct regional backend through its `backend.hcl`.

---

## 🧩 Naming Convention

Resource names follow the pattern:

```
data-analytics-<resource>-<env>
```

Example:

```
data-analytics-redshift-dev
```

---

## ⚙️ Requirements

- Terraform ≥ **1.13.0**
- AWS CLI with named profiles (e.g., `pentest-dev`, `pentest-prod`)
- Sufficient IAM permissions to deploy resources

---

## 🧾 Notes

- `dev` and `qa` use the **us-east-1** backend and region.
- `staging` and `prod` use the **us-east-2** backend and region.
- Remote state is stored in **S3** and locked with **DynamoDB**.
- Modules are environment-agnostic and reusable across all stages.

---

## 👥 Maintainers

**AI Infrastructure Team**
