# Routing and page rendering

## Description
This project is a **Next.js application** that displays news based on time periods. It includes **archive pages** and **news detail pages**.  

- Users can click on a **year or month** to see news from that period.  
- Each news item has its own page (`[slug]`) showing the title, date, image, and content.  
- Dummy data (`DUMMY_NEWS`) is used for demonstration.

---

## Technologies Used
- **Next.js 16+** (App Router)  
- **React/JSX** for components  
- **Dynamic routes**:  
  - `[[...filter]]` for archive pages (catch-all route)  
  - `[slug]` for news detail pages  
- **Client vs Server Components**:  
  - Pages are **server components** by default  
  - Use client components (`"use client"`) for interactive features  

---

## Project Structure
/app
/archive
/@latest
default.js # Latest news page
/@archive
[[...filter]]/page.js # Archive by year/month
/news
[slug]/page.js # News detail page
/components
main-header.js
news-list.js # Component to display news items
/lib
news.js # Functions for processing news data
/dummy-news.js # Sample news data
/public/images/news # News images


---

## How the App Works
1. Users can click on **year or month links** in the archive page.  
2. If news exists for the selected period, it is displayed with `<NewsList />`.  
3. If no news exists, the message:  
   ```text
   No news found for the selected period.

  ---

  ## Example Screenshot
  ![News Archive](./news%20archive.jpg)


---

## Running Locally
Clone your repository:

```Clone your repository:
git clone https://github.com/alainiranzi/Next.js-for-Routing-And-Page-Rendiring.git

```
Install independencies:
```
npm install
```
Start the development server:
```
npm run dev
```

Open your browser at **http://localhost:3000** to see the app.

