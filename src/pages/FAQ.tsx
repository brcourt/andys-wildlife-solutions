import { useState } from 'react'
import { faqItems } from '../data/faq'
import { COMPANY } from '../config'

export function FAQ() {
  const [openQuestion, setOpenQuestion] = useState<string | null>(null)

  function handleToggle(question: string) {
    setOpenQuestion(prev => (prev === question ? null : question))
  }

  return (
    <main>
      <section className="bg-forest-dark text-white py-16">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-lg">Quick answers to common questions about wildlife removal.</p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-4">
          {faqItems.map(item => {
            const isOpen = openQuestion === item.question
            return (
              <div key={item.question} className="border-b border-gray-200 py-4">
                <button
                  onClick={() => handleToggle(item.question)}
                  className="w-full text-left flex justify-between items-center font-semibold text-forest-dark"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${item.question}`}
                >
                  {item.question}
                  <span aria-hidden="true">{isOpen ? '−' : '+'}</span>
                </button>
                {isOpen && (
                  <p id={`faq-answer-${item.question}`} className="mt-3 text-gray-700 text-sm leading-relaxed">{item.answer}</p>
                )}
              </div>
            )
          })}
        </div>
      </section>

      <section className="bg-mint-light py-12 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-lg mb-4">Still have questions?</p>
          <a
            href={COMPANY.phoneHref}
            className="bg-forest-green text-white rounded-full px-6 py-2 font-medium inline-block"
          >
            Call us — {COMPANY.phone}
          </a>
        </div>
      </section>
    </main>
  )
}
