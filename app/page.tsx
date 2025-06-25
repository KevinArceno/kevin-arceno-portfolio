"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { CopyButton } from "@/app/CopyButton" 
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import {
  Moon,
  Sun,
  Github,
  Linkedin,
  Facebook,
  Mail,
  ExternalLink,
  Download,
  Code,
  Database,
  Globe,
  Server,
  Terminal,
  Menu,
  X,
  MessageCircleMoreIcon,
  Phone,
  School,
  Link2,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { link } from "fs"


export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  setIsSubmitting(true)
  setSubmitStatus('idle')

  try {
    const response = await fetch('https://formspree.io/f/xgvyngrb', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        message: formData.message,
      }),
    })

    if (response.ok) {
      setSubmitStatus('success')
      setFormData({ name: "", email: "", message: "" })
    } else {
      setSubmitStatus('error')
    }
  } catch (error) {
    console.error('Form submission error:', error)
    setSubmitStatus('error')
  } finally {
    setIsSubmitting(false)
  }
}

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setMobileMenuOpen(false)
  }


  const projects = [
    {
      title: "Arithmetic_expression",
      description: "A visual parser application that demonstrates parsing arithmetic expressions using ANTLR4 and Java. This tool provides a graphical interface for entering expressions, visualizing parse trees, and evaluating expressions.",
      image: "/Screen.png",
      tech: ["Java"],
      github: "https://github.com/KevinArceno/Arithmetic_expression",
      demo: "/1.jpg",
    },
    {
      title: "To-Do List",
      description: "Sample todo app built with the Vue framework.",
      image: "/todo.png",
      tech: ["Vue", "CSS", "HTML", "JavaScript"],
      github: "https://github.com/KevinArceno/to-doList-vue",
      demo: "https://to-do-list-vue-lime.vercel.app/",
    },
    {
      title: "Landsat Cloud Reclass Plugin (Thesis Project)",
      description: "• Developed a QGIS plugin using U-Net/CycleGAN models to automatically remove clouds from satellite imagery",
      image: "/2.png", 
      tech: ["Python", "PyTorch", "QGIS"],
      github: "https://linkly.link/29upe",
      demo: "/1.jpg",
    },
  ]

  const skills = {
    languages: ["JavaScript", "TypeScript", "Python", "Java", "C", "SQL", "PHP"],
    frameworks: ["React", "Next.js", "Vue.js", "Node.js", "Express", "Django", "Laravel", "Tailwind"],
    tools: ["Git", "Docker", "MongoDB", "PostgreSQL"],
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? "dark" : ""}`}>
      <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        {/* Navigation */}
        <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <div className="text-xl font-bold">Mackenry Kevin Arceno</div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                <button
                  onClick={() => scrollToSection("about")}
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection("projects")}
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Projects
                </button>
                <button
                  onClick={() => scrollToSection("skills")}
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Skills
                </button>
                <button
                  onClick={() => scrollToSection("resume")}
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Resume
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Contact
                </button>
                <Button variant="ghost" size="sm" onClick={toggleDarkMode} className="p-2">
                  {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                </Button>
              </div>

              {/* Mobile Navigation */}
              <div className="md:hidden flex items-center space-x-2">
                <Button variant="ghost" size="sm" onClick={toggleDarkMode} className="p-2">
                  {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                </Button>
                <Button variant="ghost" size="sm" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2">
                  {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
                </Button>
              </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
              <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-800">
                <div className="flex flex-col space-y-4">
                  <button
                    onClick={() => scrollToSection("about")}
                    className="text-left hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    About
                  </button>
                  <button
                    onClick={() => scrollToSection("projects")}
                    className="text-left hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    Projects
                  </button>
                  <button
                    onClick={() => scrollToSection("skills")}
                    className="text-left hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    Skills
                  </button>
                  <button
                    onClick={() => scrollToSection("resume")}
                    className="text-left hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    Resume
                  </button>
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="text-left hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    Contact
                  </button>
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="mb-8 animate-fade-in">
                <Image
                  src="/4.gif?height=200&width=200"
                  alt="Mackenry Kevin Arceno"
                  width={200}
                  height={200}
                  className="rounded-full mx-auto mb-6 border-4 border-blue-500 dark:border-blue-400"
                />
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 animate-slide-up">
                Hi, I'm <span className="text-blue-600 dark:text-blue-400">Mackenry Kevin Arceno</span>
              </h1>
              <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto animate-slide-up-delay">
                A Computer Science Fresh Graduate passionate about building innovative software solutions and solving complex
                problems through code.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up-delay-2">
                <Button
                  onClick={() => scrollToSection("projects")}
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
                >
                  View My Work
                </Button>
                <div className="flex space-x-4">
                  {/*<Link href="https://github.com/KevinArceno" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm" className="p-2">
                      <Github className="h-4 w-4" />
                    </Button>
                  </Link>*/}
                  <Link href="https://www.facebook.com/mackenry.kevin.arceno/" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm" className="p-2">
                      <Facebook className="h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="https://m.me/mackenry.kevin.arceno" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm" className="p-2">
                      <MessageCircleMoreIcon className="h-4 w-4" />
                    </Button>
                  </Link>
                  <Button variant="outline" size="sm" className="p-2" onClick={() => scrollToSection("contact")}>
                    <Mail className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h2>
              <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Academic Excellence & Passion for Technology</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  As a recent Computer Science graduate, I've developed a strong foundation in software engineering
                  principles, data structures, algorithms, and modern development practices. My academic journey has
                  been driven by curiosity and a genuine passion for solving complex problems through innovative
                  technology solutions.
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  I believe in writing clean, maintainable code and following industry best practices. My approach to
                  software development emphasizes thorough planning, iterative improvement, and continuous learning. I'm
                  eager to contribute to meaningful projects and grow alongside experienced developers in a
                  collaborative environment.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-white dark:bg-gray-700 rounded-lg">
                    <Code className="h-8 w-8 text-blue-600 dark:text-blue-400 mx-auto mb-2" />
                    <div className="font-semibold">Clean Code</div>
                  </div>
                  <div className="text-center p-4 bg-white dark:bg-gray-700 rounded-lg">
                    <Terminal className="h-8 w-8 text-blue-600 dark:text-blue-400 mx-auto mb-2" />
                    <div className="font-semibold">Problem Solving</div>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <School className="h-5 w-5 mr-2 text-blue-600 dark:text-blue-400" />
                      Education
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="font-semibold">Bachelor of Science in Computer Science</div>
                      <div className="text-gray-600 dark:text-gray-300">Caraga State University • Class of 2025 🎓</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        Relevant Coursework: Data Structures, Algorithms, Software Engineering, Database Systems, Web
                        Development, Computer Networks, and Computer Vision
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Server className="h-5 w-5 mr-2 text-blue-600 dark:text-blue-400" />
                      Core Strengths
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                      <li>• Full-stack web development</li>
                      <li>• Algorithm design and optimization</li>
                      <li>• Database design and management</li>
                      <li>• Version control and collaboration</li>
                      <li>• Agile development methodologies</li>
                      <li>• Computer Vision / Segmentation</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Featured Projects</h2>
              <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-4"></div>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Here are some of my recent projects that demonstrate my technical skills and problem-solving abilities.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      {project.title}
                      <div className="flex space-x-2">
                        <Link href={project.github} target="_blank" rel="noopener noreferrer">
                          <Button variant="ghost" size="sm" className="p-1">
                            <Link2 className="h-4 w-4" />
                          </Button>
                        </Link>
                        <Link href={project.demo} target="_blank" rel="noopener noreferrer">
                          <Button variant="ghost" size="sm" className="p-1">
                            <ExternalLink className="h-4 w-4" />
                          </Button>
                        </Link>
                      </div>
                    </CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Technical Skills</h2>
              <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-4"></div>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                A comprehensive overview of my technical expertise across various programming languages, frameworks, and
                tools.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Code className="h-5 w-5 mr-2 text-blue-600 dark:text-blue-400" />
                    Programming Languages
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skills.languages.map((skill, index) => (
                      <Badge key={index} className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Globe className="h-5 w-5 mr-2 text-green-600 dark:text-green-400" />
                    Frameworks & Libraries
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skills.frameworks.map((skill, index) => (
                      <Badge key={index} className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Database className="h-5 w-5 mr-2 text-purple-600 dark:text-purple-400" />
                    Tools & Technologies
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skills.tools.map((skill, index) => (
                      <Badge
                        key={index}
                        className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Resume Section */}
        <section id="resume" className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Resume</h2>
            <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-8"></div>
            <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Download my resume to learn more about my educational background, technical skills, and project
              experience.
            </p>
            <Card className="max-w-md mx-auto">
              <CardContent className="p-8">
                <div className="text-center">
                  <Download className="h-12 w-12 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Mackenry Kevin Arceno</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">Resume</p>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600">
                    <a
                      href="/resume.pdf"
                      download="Mackenry_Kevin_Arceno_Resume.pdf"
                      className="inline-flex items-center justify-center w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition-colors"
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Download Resume (PDF)
                    </a>

                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Get In Touch</h2>
              <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-4"></div>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                I'm always interested in new opportunities and collaborations. Feel free to reach out if you'd like to
                discuss potential projects or just want to connect!
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex justify-center">Send me an Email</CardTitle>
                  <CardDescription>Or email me at my email address just click this 👇</CardDescription>

                    <div className="flex items-center">
                      <div className="flex items-center space-x-2">
                        <Mail className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                        <div className="text-gray-600 dark:text-gray-300">mackenrykevin.arceno@gmail.com</div>
                        <CopyButton text="mackenrykevin.arceno@gmail.com" />
                      </div>
                    </div>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address / Phone Number</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={4}
                        className="mt-1"
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>

                    {/* ADD THESE STATUS MESSAGES RIGHT AFTER THE BUTTON */}
                    {submitStatus === 'success' && (
                      <div className="text-green-600 dark:text-green-400 text-center mt-4">
                        Message sent successfully! I'll get back to you soon.
                      </div>
                    )}
                    {submitStatus === 'error' && (
                      <div className="text-red-600 dark:text-red-400 text-center mt-4">
                        Failed to send message. Please try again or email me directly.
                      </div>
                    )}
    
                  </form>
                </CardContent>
              </Card>
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <Link href="https://m.me/mackenry.kevin.arceno" target="_blank" rel="noopener noreferrer">
                      <div className="flex items-center space-x-4">
                        <MessageCircleMoreIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                        <div>
                          <div className="font-semibold">Messenger</div>
                          <div className="text-gray-600 dark:text-gray-300">https://m.me/mackenry.kevin.arceno</div>
                        </div>
                      </div>
                    </Link>
                  </CardContent>
                </Card>
                {/*<Card>
                  <CardContent className="p-6">
                    <Link href="https://github.com/KevinArceno" target="_blank" rel="noopener noreferrer">
                      <div className="flex items-center space-x-4">
                        <Github className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                        <div>
                          <div className="font-semibold">GitHub</div>
                          <div className="text-gray-600 dark:text-gray-300">https://github.com/KevinArceno</div>
                        </div>
                      </div>
                    </Link>
                  </CardContent>
                </Card>*/}
                <Card>
                  <CardContent className="p-6">
                    <Link href="https://www.facebook.com/mackenry.kevin.arceno/" target="_blank" rel="noopener noreferrer">
                      <div className="flex items-center space-x-4">
                      <Facebook className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                      <div>
                        <div className="font-semibold">Facebook</div>
                        <div className="text-gray-600 dark:text-gray-300">www.facebook.com/mackenry.kevin.arceno</div>
                      </div>
                    </div>                    
                    </Link>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <Phone className="h-6 w-6 text-blue-600 dark:text-blue-400 mt-1" />
                      <div className="space-y-2">
                        <div className="font-semibold">Contact Number</div>
                        <div className="grid grid-cols-2 gap-x-16 font-semibold">
                          <span>Talk'n Text</span>
                          <span>Globe</span>
                        </div>
                        <div className="grid grid-cols-2 gap-x-16 text-gray-600 dark:text-gray-300">
                          <div className="flex items-center space-x-1">
                            <span>+639514562812</span>
                            <CopyButton text="+639514562812" />
                          </div>
                          <div className="flex items-center space-x-1">
                            <span>+639453226867</span>
                            <CopyButton text="+639453226867" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-gray-200 dark:border-gray-800">
          <div className="max-w-7xl mx-auto text-center">
            <p className="text-gray-600 dark:text-gray-300">
              © {new Date().getFullYear()} Mackenry Kevin Arceno. Built with ❤️ Next.js and Tailwind CSS.
            </p>
          </div>
        </footer>
      </div>
    </div>
  )
}