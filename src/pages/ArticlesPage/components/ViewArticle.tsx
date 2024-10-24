'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import hljs from 'highlight.js'
import 'highlight.js/styles/github-dark-dimmed.min.css'
import { motion } from 'framer-motion'
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Twitter, Github, Dribbble } from 'lucide-react'
import { BASE_URL } from '@/utils/constants/UrlConstants'
import Navbar from '@/components/ui/navbar'

const Image = ({ src, alt, ...props }) => {
  return <img src={src} alt={alt} {...props} />
}

const Link = ({ children, ...props }) => {
  return <a {...props}>{children}</a>
}

interface Article {
  author: string
  date: string
  title: string
  content: string
}

export default function ViewArticle() {
  const [email, setEmail] = useState('')
  const [article, setArticle] = useState<Article>({
    author: "",
    date: "",
    title: "",
    content: "",
  })
  const [isLoaded, setIsLoaded] = useState(false)

  const { id } = useParams<{ id: string }>()

  useEffect(() => {
    fetch(`${BASE_URL}/api/getArticle?id=${id}`)
      .then((response) => response.json())
      .then((data) => {
        setArticle(data)
        setIsLoaded(true)
      })
  }, [id])

  useEffect(() => {
    hljs.highlightAll()
  }, [article])

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter subscription
    console.log('Subscribing email:', email)
  }

  const slideInVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  }

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Navbar isDark isTransparent />  
      <motion.main
        className="pt-16 pb-24"
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
        variants={slideInVariants}
      >
        <div className="flex justify-between px-4 mx-auto max-w-screen-xl">
          <article className="mx-auto w-full max-w-2xl">
            <header className="mb-4 lg:mb-6">
              <address className="flex items-center mb-6 not-italic">
                <div className="inline-flex items-center mr-3 text-sm text-white">
                  <Image
                    className="mr-4 w-16 h-16 rounded-full"
                    src="https://placehold.co/400"
                    alt={article.author}
                    width={64}
                    height={64}
                  />
                  <div>
                    <a href="#" rel="author" className="text-xl font-bold text-white">
                      {article.author}
                    </a>
                    <p className="text-base text-gray-400">
                      <time dateTime={article.date} title={article.date}>
                        {new Date(article.date).toLocaleDateString('en-US', {"year":"numeric","month":"long","day":"numeric", "hour":"numeric","minute":"numeric"})}
                      </time>
                    </p>
                  </div>
                </div>
              </address>
              <h1 className="mb-8 text-3xl font-extrabold leading-tight lg:mb-6 lg:text-4xl text-white">
                {article.title}
              </h1>
            </header>
            <div className="text-white min-h-[50vh] mb-4" dangerouslySetInnerHTML={{ __html: article.content }}></div>
          </article>
        </div>
      </motion.main>

      {/* Newsletter section and footer remain unchanged */}
      {/* ... */}
    </div>
  )
}