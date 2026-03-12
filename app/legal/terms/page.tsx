export const metadata = {
    title: 'Terms of Service | LuxeAesthetic Med Spa',
    description: 'Terms and conditions for utilizing LuxeAesthetic services and website.',
}

export default function TermsOfService() {
    return (
        <>
            <h1 className="text-4xl">Terms of Service</h1>
            <p className="text-sm text-foreground/50 mb-8">Last Updated: October 2024</p>

            <h2>1. Acceptance of Terms</h2>
            <p>
                By accessing and using the LuxeAesthetic Med Spa website ("Website") and our services, you accept and agree to be bound by the terms and provisions of this agreement.
            </p>

            <h2>2. Booking & Cancellation Policy</h2>
            <p>
                We value your time and the time of our practitioners. By booking an appointment with LuxeAesthetic, you agree to the following policies:
            </p>
            <ul>
                <li><strong>Deposits:</strong> A non-refundable deposit may be required to secure your appointment slot for certain premium treatments.</li>
                <li><strong>Cancellations:</strong> We require a minimum of <strong>48 hours' notice</strong> to cancel or reschedule an appointment. Cancellations made inside of this window, or "No-Shows", will be subject to a $150 cancellation fee charged to the card on file.</li>
                <li><strong>Late Arrivals:</strong> If you are more than 15 minutes late to your appointment, we may need to reschedule to avoid disrupting the next patient's experience, and the cancellation fee will apply.</li>
            </ul>

            <h2>3. Treatment Outcomes & Guarantees</h2>
            <p>
                Medical aesthetics is an art and a science; therefore, individual results will vary. LuxeAesthetic Med Spa does not guarantee specific outcomes. Our gallery of before-and-after photographs represents the results of individual patients and is not a promise of identical results for every individual.
            </p>

            <h2>4. Intellectual Property</h2>
            <p>
                The Website and its entire contents, features, and functionality (including but not limited to all information, software, text, displays, images, video, and audio, and the design, selection, and arrangement thereof) are owned by LuxeAesthetic Med Spa and are protected by United States and international copyright laws. You may not reproduce our Before & After photographs without explicit written consent.
            </p>

            <h2>5. Refusal of Service</h2>
            <p>
                LuxeAesthetic Med Spa reserves the right to refuse service to anyone at any time. If our practitioners determine that a requested treatment is medically contra-indicated, unsafe, or unlikely to yield satisfactory results for a patient, we reserve the right to decline performing the procedure.
            </p>

            <h2>6. Modifications to Prices and Services</h2>
            <p>
                Prices for our products and treatments are subject to change without notice. We reserve the right at any time to modify or discontinue a Service without notice at any time.
            </p>
        </>
    )
}
