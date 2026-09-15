# Deploy: NIDO research site

This repo is the **research website**. Push to `main` on [nido6969/nido_research](https://github.com/nido6969/nido_research.git) builds a Docker image, pushes it to ECR, and updates AWS App Runner (same pattern as the school site).

The school site is a separate repo: [nido6969/nido-school](https://github.com/nido6969/nido-school.git).

## GitHub Actions

Workflow [`.github/workflows/deploy.yml`](../.github/workflows/deploy.yml):

1. **Lint and build** — runs on `main` and on pull requests.
2. **Docker → ECR → App Runner** — on push to `main` (and **Run workflow**).

GitHub repo **Settings → Secrets and variables → Actions**:

- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCESS_KEY`

Use the same IAM user as the school site (`website`). Region: `ap-south-1`.

ECR repository: `nido-research`. App Runner service: `nido-research`.

## WordPress (EasyWP)

Research publications come from the **same EasyWP** as the school blogs. Do **not** point `research.nidomontessori.in` at WordPress.

1. In WordPress: **Posts → Categories → Add** name `Research`, slug `research`.
2. Write in the visual editor only. Assign the **Research** category.
3. The post appears on [https://research.nidomontessori.in/publications](https://research.nidomontessori.in/publications).
4. Editors can open [https://research.nidomontessori.in/publications/wp-admin](https://research.nidomontessori.in/publications/wp-admin) — it redirects to EasyWP admin.

School `/blogs` hides posts in the `research` category so the two sites stay separate.

Pull requests only lint and build; they do not go live until merged to `main`.
