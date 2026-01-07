import { getPackage } from "@/app/actions/getPackage";
import { notFound } from "next/navigation";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type PageProps = {
  params: Promise<{
    ecosystem: string;
    name: string;
    version: string;
  }>;
};

export default async function Page({ params }: PageProps) {
  // ✅ Next.js 15/16 requirement
  const { ecosystem, name, version } = await params;

  // Defensive check: if any param is missing, show 404 and log details for debugging
  if (!ecosystem || !name || !version) {
    console.error("Route params missing or malformed", { ecosystem, name, version });
    notFound();
  }

  let data;
  try {
    data = await getPackage({ ecosystem, name, version });
  } catch (err: any) {
    if (err?.status === 404) {
      notFound();
    }
    throw err;
  }

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">
            {name}
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-3">
          <p>
            Ecosystem: <Badge>{ecosystem}</Badge>
          </p>
          <p>
            Version: <Badge>{version}</Badge>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
