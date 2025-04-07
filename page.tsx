import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function TermsAndGuidelines() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Terms and Guidelines</h1>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Event Participation Guidelines</CardTitle>
          <CardDescription>Rules and regulations for participating in campus events</CardDescription>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Registration Policy</AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Students must register for events through the official Student Event System.</li>
                  <li>Registration deadlines must be strictly adhered to. Late registrations will not be accepted.</li>
                  <li>Students can cancel their registration up to 48 hours before the event without penalty.</li>
                  <li>For team events, all team members must be registered individually.</li>
                  <li>Some events may have limited slots available on a first-come, first-served basis.</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>Attendance Requirements</AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Students must arrive at least 15 minutes before the scheduled start time of the event.</li>
                  <li>Attendance will be marked using the student ID card or digital check-in through the system.</li>
                  <li>Students must attend the entire duration of the event to receive participation credit.</li>
                  <li>In case of emergency, students must notify the event coordinator for early departure.</li>
                  <li>Certificates will only be issued to students who fulfill the attendance requirements.</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>Code of Conduct</AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Students must maintain professional behavior during all events.</li>
                  <li>Respect the opinions and contributions of fellow participants.</li>
                  <li>Any form of harassment, discrimination, or disruptive behavior will not be tolerated.</li>
                  <li>Follow the instructions of event coordinators and volunteers.</li>
                  <li>Adhere to the specific rules and guidelines of individual events.</li>
                  <li>Use of mobile phones should be limited during sessions unless required for the event.</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>Certification Process</AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Digital certificates will be issued within 7 working days after the event.</li>
                  <li>Certificates will be available for download through the Student Event System.</li>
                  <li>
                    Students must have met all attendance and participation requirements to receive a certificate.
                  </li>
                  <li>
                    For competitions, certificates will indicate the level of achievement (winner, runner-up, etc.).
                  </li>
                  <li>Any discrepancies in certificates should be reported within 14 days of issuance.</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Terms of Service</CardTitle>
          <CardDescription>Legal terms governing the use of the Student Event System</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="prose max-w-none">
            <h3 className="text-lg font-medium mt-0">1. Acceptance of Terms</h3>
            <p>
              By accessing and using the Student Event System, you acknowledge that you have read, understood, and agree
              to be bound by these Terms of Service. If you do not agree to these terms, please do not use the system.
            </p>

            <h3 className="text-lg font-medium">2. User Accounts</h3>
            <p>
              You are responsible for maintaining the confidentiality of your account credentials and for all activities
              that occur under your account. You agree to notify the administration immediately of any unauthorized use
              of your account or any other breach of security.
            </p>

            <h3 className="text-lg font-medium">3. Privacy Policy</h3>
            <p>
              Your use of the Student Event System is also governed by our Privacy Policy, which outlines how we
              collect, use, and protect your personal information. By using the system, you consent to the collection
              and use of information as described in the Privacy Policy.
            </p>

            <h3 className="text-lg font-medium">4. Intellectual Property</h3>
            <p>
              All content, features, and functionality of the Student Event System, including but not limited to text,
              graphics, logos, icons, and software, are the exclusive property of the university and are protected by
              copyright, trademark, and other intellectual property laws.
            </p>

            <h3 className="text-lg font-medium">5. Limitation of Liability</h3>
            <p>
              The university shall not be liable for any direct, indirect, incidental, special, consequential, or
              punitive damages resulting from your access to or use of, or inability to access or use, the Student Event
              System or any content therein.
            </p>

            <h3 className="text-lg font-medium">6. Modifications to Terms</h3>
            <p>
              The university reserves the right to modify these Terms of Service at any time. We will provide notice of
              significant changes by posting the updated terms on the system. Your continued use of the Student Event
              System after such modifications constitutes your acceptance of the revised terms.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

