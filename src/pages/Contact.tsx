import { useActionState } from 'react'
import { COMPANY } from '../config'

type FormState = { status: 'idle' | 'success' | 'error' }

export function Contact() {
  const [state, action, isPending] = useActionState(
    async (_prev: FormState, formData: FormData): Promise<FormState> => {
      try {
        const res = await fetch(COMPANY.formspreeEndpoint, {
          method: 'POST',
          body: JSON.stringify({
            name: formData.get('name'),
            phone: formData.get('phone'),
            message: formData.get('message'),
          }),
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        })
        return res.ok ? { status: 'success' } : { status: 'error' }
      } catch {
        return { status: 'error' }
      }
    },
    { status: 'idle' as const }
  )

  return (
    <main>
      <section className="bg-forest-dark text-white py-16">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Contact Andy's Wildlife Solutions</h1>
          <p className="text-lg">
            Give us a call or send a message — we'll get back to you quickly.
          </p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left column — Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-forest-dark mb-6">Get in Touch</h2>
              <p className="flex items-center gap-3 text-forest-dark font-semibold text-lg mb-4">
                📞 <a href={COMPANY.phoneHref}>{COMPANY.phone}</a>
              </p>
              <p className="mb-2">{COMPANY.hours}</p>
              <p className="mb-2">Serving {COMPANY.serviceArea}</p>
              <p className="mb-2">{COMPANY.email}</p>
            </div>

            {/* Right column — Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-forest-dark mb-6">Send a Message</h2>

              {state.status === 'success' ? (
                <p>Thanks! We'll be in touch soon.</p>
              ) : (
                <form action={action} className="flex flex-col gap-4">
                  {state.status === 'error' && (
                    <p className="text-red-600">
                      Something went wrong. Please call us directly.
                    </p>
                  )}

                  <div className="flex flex-col gap-1">
                    <label htmlFor="name" className="font-medium">
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      required
                      className="border border-gray-300 rounded px-3 py-2"
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <label htmlFor="phone" className="font-medium">
                      Phone
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      className="border border-gray-300 rounded px-3 py-2"
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <label htmlFor="message" className="font-medium">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className="border border-gray-300 rounded px-3 py-2"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isPending}
                    className="bg-forest-dark text-white font-semibold py-3 px-6 rounded hover:bg-forest-green transition-colors disabled:opacity-50"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
