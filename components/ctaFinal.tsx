"use client"

import React, { useState } from 'react'
import FadeIn from './animations/fade-in'
import { Button } from './ui/button'
import { ArrowRight, MessageSquare } from 'lucide-react'
import CalendarModal from './calendar-modal'
import LeadForm from './lead_form'

const CtaFinal = () => {

    const [isCalendarOpen, setIsCalendarOpen] = useState(false);
    const [isLeadFormOpen, setIsLeadFormOpen] = useState(false);

  return (
    <>
      {/* Final CTA */}
      <section className="py-20 animated-gradient text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <FadeIn>
              <h2 className="text-3xl font-bold mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl mb-8">
                Join thousands of businesses already using DialWise.ai to automate 
                their communication and boost revenue.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  variant="secondary"
                  onClick={() => setIsCalendarOpen(true)}
                >
                  Get Started Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                  onClick={() => setIsLeadFormOpen(true)}
                >
                  Talk to AI Agent
                  <MessageSquare className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Modals */}
        {isCalendarOpen && (
          <CalendarModal isOpen={isCalendarOpen} onClose={() => setIsCalendarOpen(false)} />
        )}
        {isLeadFormOpen && (
          <LeadForm isOpen={isLeadFormOpen} onClose={() => setIsLeadFormOpen(false)} />
        )}

      </section>
    </>
  )
}

export default CtaFinal;