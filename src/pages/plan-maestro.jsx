import Plan from "@/components/planmaestro/Plan";
import LineasAccion from "../components/planmaestro/LineasAccion";
import Cards from "../components/planmaestro/Cards";

export default function planMaestro() {
  return (
    <div className="pt-28">
      <Plan />
      <LineasAccion />
      <Cards />
    </div>
  );
}
