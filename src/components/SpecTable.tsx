import { useTranslations } from "next-intl";
import type { ProductSpecs } from "@/data/types";

const specOrder: (keyof ProductSpecs)[] = [
  "pixelPitch",
  "brightness",
  "refreshRate",
  "resolutionModule",
  "viewingAngle",
  "ipRating",
  "lifespan",
  "powerConsumption",
  "cabinetSize",
];

export function SpecTable({ specs }: { specs: ProductSpecs }) {
  const t = useTranslations("product.specs");

  return (
    <table className="w-full border-collapse">
      <tbody>
        {specOrder.map((key, i) => (
          <tr
            key={key}
            className={i !== specOrder.length - 1 ? "border-b border-graphite/10" : ""}
          >
            <th
              scope="row"
              className="w-1/2 py-3 pe-4 text-start font-body text-sm font-medium text-graphite-soft sm:w-2/5"
            >
              {t(key)}
            </th>
            <td className="py-3 font-mono-spec text-sm font-medium text-graphite">
              {specs[key]}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
