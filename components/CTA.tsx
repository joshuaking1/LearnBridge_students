import Link from "next/link";
import Image from "next/image";

const CTA = () => {
  return (
    <section className="cta-section">
        <div className="cta-badge">Start Learing With LearnBridge's AI Companions</div>
        <h2 className="text-3xl font-bold">Unlock Your Potential with LearnBridge's AI Companions</h2>
        <p>Pick a name, subject voice, & style - and start learning with your AI companion through conversations that feel natural and fun.</p>
        <Image src="images/cta.svg" alt="cta" width={362} height={232} />
        <button className="btn-primary">
            <Image src="/icons/plus.svg" alt="plus" width={12} height={12} />
            <Link href="compainons/new">
            <p>Create Companion</p>
            </Link>
        </button>
    </section>
  );
};
export default CTA;
