export const metadata = {
    title: 'Medical Disclaimer | LuxeAesthetic Med Spa',
    description: 'Important medical and educational disclaimers regarding aesthetic treatments.',
}

export default function MedicalDisclaimer() {
    return (
        <>
            <h1 className="text-4xl text-rose-900 border-b border-rose-900/20 pb-4 mb-8">Medical Disclaimer</h1>

            <h2>1. Educational Purposes Only</h2>
            <p>
                The content provided on the LuxeAesthetic Med Spa website, including all text, graphics, images, and other materials, is for informational and educational purposes only. It is not intended to be a substitute for professional medical advice, diagnosis, or treatment.
            </p>

            <h2>2. No Practitioner-Patient Relationship</h2>
            <p>
                Reading the information on this website, interacting with our "Skin Quiz", or submitting a contact form does <strong>not</strong> create a provider-patient relationship between you and LuxeAesthetic Med Spa or Elena M., RN, BSN.
            </p>
            <p>
                A formal practitioner-patient relationship is only established after an in-person, comprehensive medical consultation and the physical signing of informed consent documents at our clinic.
            </p>

            <h2>3. Individual Results Will Vary</h2>
            <p>
                Medical aesthetics involves human biology, and therefore outcomes are entirely dependent on individual patient anatomy, health history, compliance with aftercare, and baseline conditions. The "Before and After" images presented on this website are actual patients of LuxeAesthetic Med Spa; however, they are provided for illustrative purposes only. We cannot and do not guarantee you will experience exact, identical, or similar results.
            </p>

            <h2>4. Off-Label Usage</h2>
            <p>
                During your consultation, your provider may discuss the "off-label" use of FDA-approved products. "Off-label" means the product is being used in a manner (such as a specific dosage or placement area) not explicitly outlined in the FDA's approved packaging label, but which is a common, accepted, and safe practice within the medical aesthetics community. All product risks and intended uses will be discussed thoroughly prior to any treatment.
            </p>

            <h2>5. Emergency Situations</h2>
            <p>
                This website should not be used in medical emergencies. If you are experiencing a medical emergency, including a severe allergic reaction or vascular complication post-treatment, please call 911 immediately or go to the nearest emergency room.
            </p>
        </>
    )
}
