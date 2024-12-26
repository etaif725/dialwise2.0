import { Card } from '@/components/ui/card'
import { motion } from 'framer-motion'
import { Info } from 'lucide-react'
import React from 'react'

function PricingNotice() {
  return (
        <>
          {/* Telephony Notice */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-3xl mx-auto mb-12"
          >
            <Card className="p-6 border-primary/50">
              <div className="flex items-start gap-4">
                <Info className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Important Note About Telephony Costs</h3>
                  <p className="text-sm text-muted-foreground">
                    The prices shown do not include telephony provider costs (Twilio/Vonage/SIP). 
                    These costs are billed separately based on your usage and chosen provider. 
                    Our team will help you select and set up the most cost-effective solution 
                    for your needs during onboarding.
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
          </>
  )
}

export default PricingNotice