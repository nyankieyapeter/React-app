import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary text-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-2xl font-bold text-accent">
              Mdrive Fleet Services
            </Link>
            <Link to="/">
              <Button variant="outline" className="btn-secondary">
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Terms and <span className="text-accent">Conditions</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Please read these terms and conditions carefully before using our services.
            </p>
          </div>

          <Card className="p-8 bg-white shadow-card">
            <div className="prose prose-lg max-w-none space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Mdrive Fleet Services Vehicle Hire Agreement</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Mdrive Fleet Services provides vehicles for self-drive hire to individuals (hereafter referred to as
                    "the Hirer") in accordance with the terms and conditions outlined in this document. By hiring the
                    vehicle, the Hirer acknowledges and agrees to abide by all terms and conditions specified herein.
                  </p>
                  <p>
                    The period of hire shall be as set out overleaf, and the Vehicle must be returned to the company on
                    the date and time indicated, unless the period is extended by notifying the company in writing or by
                    special arrangement made in writing by the Hirer when signing the contract. If this clause is
                    violated, Mdrive Fleet Services will charge the Hirer a fee of KES 1,000 for every additional hour incurred.
                  </p>
                  <p>
                    By accepting the vehicle, the Hirer shall be deemed to have satisfied themselves that the Vehicle is
                    roadworthy and in a proper, safe condition and working order. Mdrive Fleet Services shall not be
                    liable to make any payment to the Hirer in the event of any breakdown. The company shall not be held
                    responsible or accused of providing a faulty or unroadworthy vehicle for any incidents occurring
                    during the rental period.
                  </p>
                  <p>
                    The hire charges shall be based on the number of days the Vehicle is hired and the mileage covered
                    between the date the Vehicle is taken from and returned to the company’s premises. The daily rate
                    and per-kilometer charges are set out overleaf. If the speedometer seal has been tampered with, a
                    fee of KES 50,000 shall be charged, and the Hirer shall be liable for replacing it.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Hirer Obligations</h2>
                <div className="space-y-4 text-muted-foreground">
                  <ul className="list-disc list-inside space-y-2">
                    <li>They will not drive (nor allow any unauthorized driver to drive) the Vehicle under the influence of alcohol, hallucinogens, narcotics, barbiturates, or any other substances impairing consciousness or driving ability.</li>
                    <li>The Vehicle will be driven skillfully and in full compliance with all Traffic Laws, Rules, and the Highway Code.</li>
                    <li>The Vehicle will not be overloaded or carry more passengers than permitted by the insurance license.</li>
                    <li>The Vehicle will only be driven by the Hirer or another named driver who holds a valid driver’s license for a minimum of 2 years and is aged between 23 and 70.</li>
                    <li>The Vehicle shall be kept locked and secured when parked, and every precaution shall be taken to avoid theft or damage.</li>
                    <li>The Vehicle will be used only for personal and social purposes and driven only on weather-appropriate roads. It will not be used for racing, pace-making, or carrying fare-paying passengers.</li>
                    <li>The Vehicle shall not be taken outside of Kenya.</li>
                    <li>The Hirer shall promptly pay all parking and traffic fines, with an additional KES 1,000 administrative charge per unpaid fine.</li>
                    <li>The Hirer shall regularly check the oil, water, and tire pressure. Negligence will result in liability.</li>
                    <li>No modifications or repairs shall be made without written authorization. The company will not cover defects from unauthorized changes.</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Breakdowns and Accidents</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>The Hirer shall be responsible for:</p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>The full cost of towing the Vehicle back to the company’s premises.</li>
                    <li>All repairs or, if beyond repair, the full replacement cost.</li>
                  </ul>
                  <p>They shall also be liable for:</p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Repair of punctures, burst tires, lost spare tires, and damaged tools or accessories.</li>
                    <li>Reporting any accidents within 24 hours and providing a police abstract and written report within 48 hours.</li>
                    <li>If theft occurs and an anti-theft device was not used, the Hirer is fully liable.</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Insurance Coverage</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>The Hirer acknowledges they have reviewed and agree to the insurance policy. Insurance does not cover:</p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Loss of personal items from the Vehicle.</li>
                    <li>Mechanical breakdowns not due to collision.</li>
                    <li>Injuries or losses to the Hirer, driver, or passengers.</li>
                    <li>Damage to tires, wheels, windows, or tools.</li>
                  </ul>
                  <p>
                    All vehicles are insured; however, the first KES amount applicable to the specific vehicle as excess is payable by the Hirer.
                    Insurance is only valid if all agreement terms are followed. Failure to comply voids insurance and makes the
                    Hirer liable for all damages and losses.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Payment Terms</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    <ul className="list-disc list-inside space-y-2">
                      <li>A deposit is required, along with full identification and address. A guarantor may be requested at the company's discretion.</li>
                      <li>No relaxation or indulgence by Mdrive Fleet Services in enforcing this agreement shall affect its rights.</li>
                   </ul>
                  </p>
                </div>
              </section>

              <section className="pt-8 border-t">
                <p className="text-sm text-muted-foreground">
                  <strong>Last updated:</strong> {new Date().toLocaleDateString()}
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  These terms and conditions constitute the entire agreement between Mdrive Fleet Services and the renter.
                  Any modifications must be made in writing and agreed upon by both parties.
                </p>
              </section>
            </div>
          </Card>

          <div className="text-center mt-12">
            <Link to="/">
              <Button className="btn-primary">Return to Home</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;
