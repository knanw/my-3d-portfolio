---
title: "Hybrid Recommender System"
date: "2026-01-30"
thumbnail: "icon-pen"
github_link: "https://github.com/YOUR_USERNAME/YOUR_REPO_NAME"
---
# Hybrid Recommendation Engine: Group Project & Defense

This project was developed as a comprehensive practical group project focusing on modern recommendation strategies. It features a live **Streamlit** dashboard to demonstrate data preprocessing, model training, and a hybrid serving engine.

## 🚀 Quick Links
- [GitHub Repository](https://github.com/YOUR_USERNAME/YOUR_REPO_NAME)
- [Live Demo (Streamlit)](#)

## 📖 Project Overview
The goal was to build a robust recommendation system that overcomes the limitations of single-model approaches (like the Cold Start problem) by combining collaborative and content-based techniques.

### Core Modules:
1.  **Preprocessing & Feature Engineering**: 
    - Handling implicit feedback (clicks/views).
    - Negative sampling for robust training.
    - Scaling and encoding of metadata (Age, Genre, etc.).
2.  **Collaborative Filtering (CF)**: 
    - Matrix Factorization via **ALS**.
    - Neural Collaborative Filtering (NCF) using TensorFlow.
3.  **Content-Based Filtering**: 
    - Metadata-driven recommendations using TF-IDF and Cosine Similarity.
4.  **Hybrid Engine**: 
    - A **Two-Tower Neural Network** architecture that fuses latent embeddings with explicit item/user features.

---

## 🖥️ System Architecture


Our hybrid model processes User and Item features in parallel "towers" before merging them into a deep neural network to predict interaction probabilities.

---

## 📊 Evaluation & Metrics
For the defense presentation, we evaluated our models using top-tier industry metrics:
* **Hit Rate @ 10**: Measures if the actual item is within the top 10 recommendations.
* **NDCG (Normalized Discounted Cumulative Gain)**: Rewards the model for placing relevant items at the top of the list.

---

## 📸 Screenshots & Demo

### 1. Dashboard Interface
*(Replace this with your Streamlit Screenshot)*
![Streamlit UI Screenshot](https://via.placeholder.com/800x400?text=Streamlit+UI+Dashboard+Screenshot)

### 2. Latent Factor Visualization
*(Replace this with your Plotly Embedding chart)*
![Latent Space Visualization](https://via.placeholder.com/800x400?text=User-Item+Embedding+Space+Visualization)

---

## 🛠️ Tech Stack
- **Backend**: FastAPI (Python)
- **ML Framework**: TensorFlow / Scikit-Learn
- **Frontend/Presentation**: Streamlit
- **Data**: Pandas, Numpy

---

### Contact & Defense
Developed by [Your Names/Group Name].  
*Presented as part of the [Your Course/University] final defense.*